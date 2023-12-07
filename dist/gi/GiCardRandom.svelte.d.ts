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
export type GiCardRandomProps = typeof __propDef.props;
export type GiCardRandomEvents = typeof __propDef.events;
export type GiCardRandomSlots = typeof __propDef.slots;
export default class GiCardRandom extends SvelteComponentTyped<GiCardRandomProps, GiCardRandomEvents, GiCardRandomSlots> {
}
export {};
