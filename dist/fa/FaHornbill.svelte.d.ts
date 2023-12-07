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
export type FaHornbillProps = typeof __propDef.props;
export type FaHornbillEvents = typeof __propDef.events;
export type FaHornbillSlots = typeof __propDef.slots;
export default class FaHornbill extends SvelteComponentTyped<FaHornbillProps, FaHornbillEvents, FaHornbillSlots> {
}
export {};
