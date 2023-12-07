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
export type GiFeatheredWingProps = typeof __propDef.props;
export type GiFeatheredWingEvents = typeof __propDef.events;
export type GiFeatheredWingSlots = typeof __propDef.slots;
export default class GiFeatheredWing extends SvelteComponentTyped<GiFeatheredWingProps, GiFeatheredWingEvents, GiFeatheredWingSlots> {
}
export {};
