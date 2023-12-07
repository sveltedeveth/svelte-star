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
export type MdDriveEtaProps = typeof __propDef.props;
export type MdDriveEtaEvents = typeof __propDef.events;
export type MdDriveEtaSlots = typeof __propDef.slots;
export default class MdDriveEta extends SvelteComponentTyped<MdDriveEtaProps, MdDriveEtaEvents, MdDriveEtaSlots> {
}
export {};
