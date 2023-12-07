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
export type MdLandscapeProps = typeof __propDef.props;
export type MdLandscapeEvents = typeof __propDef.events;
export type MdLandscapeSlots = typeof __propDef.slots;
export default class MdLandscape extends SvelteComponentTyped<MdLandscapeProps, MdLandscapeEvents, MdLandscapeSlots> {
}
export {};
