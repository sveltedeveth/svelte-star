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
export type GiAudioCassetteProps = typeof __propDef.props;
export type GiAudioCassetteEvents = typeof __propDef.events;
export type GiAudioCassetteSlots = typeof __propDef.slots;
export default class GiAudioCassette extends SvelteComponentTyped<GiAudioCassetteProps, GiAudioCassetteEvents, GiAudioCassetteSlots> {
}
export {};
