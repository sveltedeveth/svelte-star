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
export type FaMediumMProps = typeof __propDef.props;
export type FaMediumMEvents = typeof __propDef.events;
export type FaMediumMSlots = typeof __propDef.slots;
export default class FaMediumM extends SvelteComponentTyped<FaMediumMProps, FaMediumMEvents, FaMediumMSlots> {
}
export {};
