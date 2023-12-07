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
export type DiGoogleDriveProps = typeof __propDef.props;
export type DiGoogleDriveEvents = typeof __propDef.events;
export type DiGoogleDriveSlots = typeof __propDef.slots;
export default class DiGoogleDrive extends SvelteComponentTyped<DiGoogleDriveProps, DiGoogleDriveEvents, DiGoogleDriveSlots> {
}
export {};
