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
export type DiCodropsProps = typeof __propDef.props;
export type DiCodropsEvents = typeof __propDef.events;
export type DiCodropsSlots = typeof __propDef.slots;
export default class DiCodrops extends SvelteComponentTyped<DiCodropsProps, DiCodropsEvents, DiCodropsSlots> {
}
export {};
