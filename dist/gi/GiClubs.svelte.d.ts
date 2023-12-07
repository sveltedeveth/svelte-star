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
export type GiClubsProps = typeof __propDef.props;
export type GiClubsEvents = typeof __propDef.events;
export type GiClubsSlots = typeof __propDef.slots;
export default class GiClubs extends SvelteComponentTyped<GiClubsProps, GiClubsEvents, GiClubsSlots> {
}
export {};
