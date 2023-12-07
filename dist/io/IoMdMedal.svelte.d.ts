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
export type IoMdMedalProps = typeof __propDef.props;
export type IoMdMedalEvents = typeof __propDef.events;
export type IoMdMedalSlots = typeof __propDef.slots;
export default class IoMdMedal extends SvelteComponentTyped<IoMdMedalProps, IoMdMedalEvents, IoMdMedalSlots> {
}
export {};
