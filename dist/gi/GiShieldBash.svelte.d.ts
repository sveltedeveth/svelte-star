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
export type GiShieldBashProps = typeof __propDef.props;
export type GiShieldBashEvents = typeof __propDef.events;
export type GiShieldBashSlots = typeof __propDef.slots;
export default class GiShieldBash extends SvelteComponentTyped<GiShieldBashProps, GiShieldBashEvents, GiShieldBashSlots> {
}
export {};
