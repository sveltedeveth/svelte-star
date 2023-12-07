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
export type FaKhandaProps = typeof __propDef.props;
export type FaKhandaEvents = typeof __propDef.events;
export type FaKhandaSlots = typeof __propDef.slots;
export default class FaKhanda extends SvelteComponentTyped<FaKhandaProps, FaKhandaEvents, FaKhandaSlots> {
}
export {};
