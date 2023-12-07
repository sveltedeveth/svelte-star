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
export type GiDarkSquadProps = typeof __propDef.props;
export type GiDarkSquadEvents = typeof __propDef.events;
export type GiDarkSquadSlots = typeof __propDef.slots;
export default class GiDarkSquad extends SvelteComponentTyped<GiDarkSquadProps, GiDarkSquadEvents, GiDarkSquadSlots> {
}
export {};
