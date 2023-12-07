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
export type FaSpotifyProps = typeof __propDef.props;
export type FaSpotifyEvents = typeof __propDef.events;
export type FaSpotifySlots = typeof __propDef.slots;
export default class FaSpotify extends SvelteComponentTyped<FaSpotifyProps, FaSpotifyEvents, FaSpotifySlots> {
}
export {};
