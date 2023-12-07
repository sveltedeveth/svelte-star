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
export type GiRibcageProps = typeof __propDef.props;
export type GiRibcageEvents = typeof __propDef.events;
export type GiRibcageSlots = typeof __propDef.slots;
export default class GiRibcage extends SvelteComponentTyped<GiRibcageProps, GiRibcageEvents, GiRibcageSlots> {
}
export {};
