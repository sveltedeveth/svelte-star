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
export type TiMediaPauseProps = typeof __propDef.props;
export type TiMediaPauseEvents = typeof __propDef.events;
export type TiMediaPauseSlots = typeof __propDef.slots;
export default class TiMediaPause extends SvelteComponentTyped<TiMediaPauseProps, TiMediaPauseEvents, TiMediaPauseSlots> {
}
export {};
