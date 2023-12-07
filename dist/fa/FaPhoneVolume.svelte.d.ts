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
export type FaPhoneVolumeProps = typeof __propDef.props;
export type FaPhoneVolumeEvents = typeof __propDef.events;
export type FaPhoneVolumeSlots = typeof __propDef.slots;
export default class FaPhoneVolume extends SvelteComponentTyped<FaPhoneVolumeProps, FaPhoneVolumeEvents, FaPhoneVolumeSlots> {
}
export {};
