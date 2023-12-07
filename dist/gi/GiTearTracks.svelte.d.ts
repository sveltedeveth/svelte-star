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
export type GiTearTracksProps = typeof __propDef.props;
export type GiTearTracksEvents = typeof __propDef.events;
export type GiTearTracksSlots = typeof __propDef.slots;
export default class GiTearTracks extends SvelteComponentTyped<GiTearTracksProps, GiTearTracksEvents, GiTearTracksSlots> {
}
export {};
