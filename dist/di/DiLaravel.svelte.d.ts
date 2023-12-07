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
export type DiLaravelProps = typeof __propDef.props;
export type DiLaravelEvents = typeof __propDef.events;
export type DiLaravelSlots = typeof __propDef.slots;
export default class DiLaravel extends SvelteComponentTyped<DiLaravelProps, DiLaravelEvents, DiLaravelSlots> {
}
export {};
