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
export type GiCaltropsProps = typeof __propDef.props;
export type GiCaltropsEvents = typeof __propDef.events;
export type GiCaltropsSlots = typeof __propDef.slots;
export default class GiCaltrops extends SvelteComponentTyped<GiCaltropsProps, GiCaltropsEvents, GiCaltropsSlots> {
}
export {};
