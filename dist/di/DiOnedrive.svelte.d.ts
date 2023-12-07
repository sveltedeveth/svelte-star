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
export type DiOnedriveProps = typeof __propDef.props;
export type DiOnedriveEvents = typeof __propDef.events;
export type DiOnedriveSlots = typeof __propDef.slots;
export default class DiOnedrive extends SvelteComponentTyped<DiOnedriveProps, DiOnedriveEvents, DiOnedriveSlots> {
}
export {};
