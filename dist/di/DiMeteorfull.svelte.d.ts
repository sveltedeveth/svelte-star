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
export type DiMeteorfullProps = typeof __propDef.props;
export type DiMeteorfullEvents = typeof __propDef.events;
export type DiMeteorfullSlots = typeof __propDef.slots;
export default class DiMeteorfull extends SvelteComponentTyped<DiMeteorfullProps, DiMeteorfullEvents, DiMeteorfullSlots> {
}
export {};
