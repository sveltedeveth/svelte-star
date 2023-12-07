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
export type IoMdTrophyProps = typeof __propDef.props;
export type IoMdTrophyEvents = typeof __propDef.events;
export type IoMdTrophySlots = typeof __propDef.slots;
export default class IoMdTrophy extends SvelteComponentTyped<IoMdTrophyProps, IoMdTrophyEvents, IoMdTrophySlots> {
}
export {};
