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
export type IoMdBuildProps = typeof __propDef.props;
export type IoMdBuildEvents = typeof __propDef.events;
export type IoMdBuildSlots = typeof __propDef.slots;
export default class IoMdBuild extends SvelteComponentTyped<IoMdBuildProps, IoMdBuildEvents, IoMdBuildSlots> {
}
export {};
