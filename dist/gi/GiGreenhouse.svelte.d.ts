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
export type GiGreenhouseProps = typeof __propDef.props;
export type GiGreenhouseEvents = typeof __propDef.events;
export type GiGreenhouseSlots = typeof __propDef.slots;
export default class GiGreenhouse extends SvelteComponentTyped<GiGreenhouseProps, GiGreenhouseEvents, GiGreenhouseSlots> {
}
export {};
