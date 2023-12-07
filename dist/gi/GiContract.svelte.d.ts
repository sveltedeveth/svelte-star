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
export type GiContractProps = typeof __propDef.props;
export type GiContractEvents = typeof __propDef.events;
export type GiContractSlots = typeof __propDef.slots;
export default class GiContract extends SvelteComponentTyped<GiContractProps, GiContractEvents, GiContractSlots> {
}
export {};
