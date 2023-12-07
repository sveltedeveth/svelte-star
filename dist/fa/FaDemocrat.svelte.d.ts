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
export type FaDemocratProps = typeof __propDef.props;
export type FaDemocratEvents = typeof __propDef.events;
export type FaDemocratSlots = typeof __propDef.slots;
export default class FaDemocrat extends SvelteComponentTyped<FaDemocratProps, FaDemocratEvents, FaDemocratSlots> {
}
export {};
