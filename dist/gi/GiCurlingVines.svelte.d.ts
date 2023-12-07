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
export type GiCurlingVinesProps = typeof __propDef.props;
export type GiCurlingVinesEvents = typeof __propDef.events;
export type GiCurlingVinesSlots = typeof __propDef.slots;
export default class GiCurlingVines extends SvelteComponentTyped<GiCurlingVinesProps, GiCurlingVinesEvents, GiCurlingVinesSlots> {
}
export {};
