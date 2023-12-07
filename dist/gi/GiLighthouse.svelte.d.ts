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
export type GiLighthouseProps = typeof __propDef.props;
export type GiLighthouseEvents = typeof __propDef.events;
export type GiLighthouseSlots = typeof __propDef.slots;
export default class GiLighthouse extends SvelteComponentTyped<GiLighthouseProps, GiLighthouseEvents, GiLighthouseSlots> {
}
export {};
