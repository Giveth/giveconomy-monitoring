import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class TokenDistro {
    constructor(props?: Partial<TokenDistro>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    chain!: string

    @StringColumn_({nullable: false})
    address!: string

    /**
     * Total amount of GIV token sent to the distributor
     */
    @BigIntColumn_({nullable: false})
    totalGIVBalance!: bigint

    /**
     * Total amount of balance assigned to the distributors
     */
    @BigIntColumn_({nullable: false})
    totalAssigned!: bigint
}
