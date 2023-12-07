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
export type GiSewingNeedleProps = typeof __propDef.props;
export type GiSewingNeedleEvents = typeof __propDef.events;
export type GiSewingNeedleSlots = typeof __propDef.slots;
export default class GiSewingNeedle extends SvelteComponentTyped<GiSewingNeedleProps, GiSewingNeedleEvents, GiSewingNeedleSlots> {
}
export {};
