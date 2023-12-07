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
export type GiTrophyProps = typeof __propDef.props;
export type GiTrophyEvents = typeof __propDef.events;
export type GiTrophySlots = typeof __propDef.slots;
export default class GiTrophy extends SvelteComponentTyped<GiTrophyProps, GiTrophyEvents, GiTrophySlots> {
}
export {};
