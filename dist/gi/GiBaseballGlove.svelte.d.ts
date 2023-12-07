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
export type GiBaseballGloveProps = typeof __propDef.props;
export type GiBaseballGloveEvents = typeof __propDef.events;
export type GiBaseballGloveSlots = typeof __propDef.slots;
export default class GiBaseballGlove extends SvelteComponentTyped<GiBaseballGloveProps, GiBaseballGloveEvents, GiBaseballGloveSlots> {
}
export {};
