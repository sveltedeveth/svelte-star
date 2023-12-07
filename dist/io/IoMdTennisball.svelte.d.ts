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
export type IoMdTennisballProps = typeof __propDef.props;
export type IoMdTennisballEvents = typeof __propDef.events;
export type IoMdTennisballSlots = typeof __propDef.slots;
export default class IoMdTennisball extends SvelteComponentTyped<IoMdTennisballProps, IoMdTennisballEvents, IoMdTennisballSlots> {
}
export {};
