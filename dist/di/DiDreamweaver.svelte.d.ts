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
export type DiDreamweaverProps = typeof __propDef.props;
export type DiDreamweaverEvents = typeof __propDef.events;
export type DiDreamweaverSlots = typeof __propDef.slots;
export default class DiDreamweaver extends SvelteComponentTyped<DiDreamweaverProps, DiDreamweaverEvents, DiDreamweaverSlots> {
}
export {};
