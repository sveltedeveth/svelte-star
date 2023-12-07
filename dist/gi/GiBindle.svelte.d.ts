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
export type GiBindleProps = typeof __propDef.props;
export type GiBindleEvents = typeof __propDef.events;
export type GiBindleSlots = typeof __propDef.slots;
export default class GiBindle extends SvelteComponentTyped<GiBindleProps, GiBindleEvents, GiBindleSlots> {
}
export {};
