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
export type FaGoogleDriveProps = typeof __propDef.props;
export type FaGoogleDriveEvents = typeof __propDef.events;
export type FaGoogleDriveSlots = typeof __propDef.slots;
export default class FaGoogleDrive extends SvelteComponentTyped<FaGoogleDriveProps, FaGoogleDriveEvents, FaGoogleDriveSlots> {
}
export {};
