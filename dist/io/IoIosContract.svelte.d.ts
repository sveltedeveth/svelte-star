import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoIosContractProps = typeof __propDef.props;
export type IoIosContractEvents = typeof __propDef.events;
export type IoIosContractSlots = typeof __propDef.slots;
export default class IoIosContract extends SvelteComponentTyped<IoIosContractProps, IoIosContractEvents, IoIosContractSlots> {
}
export {};
