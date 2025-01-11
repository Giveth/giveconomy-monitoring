import {Entity as Entity_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Unipool {
    constructor(props?: Partial<Unipool>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    chain!: string

    @StringColumn_({nullable: false})
    address!: string

    @StringColumn_({nullable: true})
    name!: string | undefined | null

    /**
     * Total amount of reward notification
     */
    @BigIntColumn_({nullable: false})
    totalNotified!: bigint

    /**
     * Total amount of token distro balance assigned to the distributor
     */
    @BigIntColumn_({nullable: false})
    totalAssignedTo!: bigint
}
