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
export type DiSnapSvgProps = typeof __propDef.props;
export type DiSnapSvgEvents = typeof __propDef.events;
export type DiSnapSvgSlots = typeof __propDef.slots;
export default class DiSnapSvg extends SvelteComponentTyped<DiSnapSvgProps, DiSnapSvgEvents, DiSnapSvgSlots> {
}
export {};
