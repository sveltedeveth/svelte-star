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
export type DiRorProps = typeof __propDef.props;
export type DiRorEvents = typeof __propDef.events;
export type DiRorSlots = typeof __propDef.slots;
export default class DiRor extends SvelteComponentTyped<DiRorProps, DiRorEvents, DiRorSlots> {
}
export {};
