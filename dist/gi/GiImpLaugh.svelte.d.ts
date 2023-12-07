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
export type GiImpLaughProps = typeof __propDef.props;
export type GiImpLaughEvents = typeof __propDef.events;
export type GiImpLaughSlots = typeof __propDef.slots;
export default class GiImpLaugh extends SvelteComponentTyped<GiImpLaughProps, GiImpLaughEvents, GiImpLaughSlots> {
}
export {};
