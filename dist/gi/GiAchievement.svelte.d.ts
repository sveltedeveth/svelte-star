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
export type GiAchievementProps = typeof __propDef.props;
export type GiAchievementEvents = typeof __propDef.events;
export type GiAchievementSlots = typeof __propDef.slots;
export default class GiAchievement extends SvelteComponentTyped<GiAchievementProps, GiAchievementEvents, GiAchievementSlots> {
}
export {};
