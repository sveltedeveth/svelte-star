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
export type FaTeamspeakProps = typeof __propDef.props;
export type FaTeamspeakEvents = typeof __propDef.events;
export type FaTeamspeakSlots = typeof __propDef.slots;
export default class FaTeamspeak extends SvelteComponentTyped<FaTeamspeakProps, FaTeamspeakEvents, FaTeamspeakSlots> {
}
export {};
