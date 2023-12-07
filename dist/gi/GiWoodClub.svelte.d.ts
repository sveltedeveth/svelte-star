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
export type GiWoodClubProps = typeof __propDef.props;
export type GiWoodClubEvents = typeof __propDef.events;
export type GiWoodClubSlots = typeof __propDef.slots;
export default class GiWoodClub extends SvelteComponentTyped<GiWoodClubProps, GiWoodClubEvents, GiWoodClubSlots> {
}
export {};
