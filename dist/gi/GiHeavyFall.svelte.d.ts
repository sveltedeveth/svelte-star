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
export type GiHeavyFallProps = typeof __propDef.props;
export type GiHeavyFallEvents = typeof __propDef.events;
export type GiHeavyFallSlots = typeof __propDef.slots;
export default class GiHeavyFall extends SvelteComponentTyped<GiHeavyFallProps, GiHeavyFallEvents, GiHeavyFallSlots> {
}
export {};
