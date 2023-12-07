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
export type GiCoronationProps = typeof __propDef.props;
export type GiCoronationEvents = typeof __propDef.events;
export type GiCoronationSlots = typeof __propDef.slots;
export default class GiCoronation extends SvelteComponentTyped<GiCoronationProps, GiCoronationEvents, GiCoronationSlots> {
}
export {};
