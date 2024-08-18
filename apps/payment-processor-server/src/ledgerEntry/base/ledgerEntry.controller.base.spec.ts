import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LedgerEntryController } from "../ledgerEntry.controller";
import { LedgerEntryService } from "../ledgerEntry.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  ledgerAmount: 42.42,
  ledgerTimestamp: new Date(),
  ledgerType: "exampleLedgerType",
  timestamp: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amount: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  ledgerAmount: 42.42,
  ledgerTimestamp: new Date(),
  ledgerType: "exampleLedgerType",
  timestamp: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    createdAt: new Date(),
    id: "exampleId",
    ledgerAmount: 42.42,
    ledgerTimestamp: new Date(),
    ledgerType: "exampleLedgerType",
    timestamp: new Date(),
    typeField: "exampleTypeField",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  ledgerAmount: 42.42,
  ledgerTimestamp: new Date(),
  ledgerType: "exampleLedgerType",
  timestamp: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};

const service = {
  createLedgerEntry() {
    return CREATE_RESULT;
  },
  ledgerEntries: () => FIND_MANY_RESULT,
  ledgerEntry: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("LedgerEntry", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LedgerEntryService,
          useValue: service,
        },
      ],
      controllers: [LedgerEntryController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /ledgerEntries", async () => {
    await request(app.getHttpServer())
      .post("/ledgerEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        ledgerTimestamp: CREATE_RESULT.ledgerTimestamp.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /ledgerEntries", async () => {
    await request(app.getHttpServer())
      .get("/ledgerEntries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          ledgerTimestamp: FIND_MANY_RESULT[0].ledgerTimestamp.toISOString(),
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /ledgerEntries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ledgerEntries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ledgerEntries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ledgerEntries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        ledgerTimestamp: FIND_ONE_RESULT.ledgerTimestamp.toISOString(),
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /ledgerEntries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ledgerEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        ledgerTimestamp: CREATE_RESULT.ledgerTimestamp.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/ledgerEntries")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
