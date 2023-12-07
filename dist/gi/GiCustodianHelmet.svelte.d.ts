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
export type GiCustodianHelmetProps = typeof __propDef.props;
export type GiCustodianHelmetEvents = typeof __propDef.events;
export type GiCustodianHelmetSlots = typeof __propDef.slots;
export default class GiCustodianHelmet extends SvelteComponentTyped<GiCustodianHelmetProps, GiCustodianHelmetEvents, GiCustodianHelmetSlots> {
}
export {};
