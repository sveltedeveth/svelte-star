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
export type GiShieldBouncesProps = typeof __propDef.props;
export type GiShieldBouncesEvents = typeof __propDef.events;
export type GiShieldBouncesSlots = typeof __propDef.slots;
export default class GiShieldBounces extends SvelteComponentTyped<GiShieldBouncesProps, GiShieldBouncesEvents, GiShieldBouncesSlots> {
}
export {};
