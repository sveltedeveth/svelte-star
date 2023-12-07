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
export type MdNewReleasesProps = typeof __propDef.props;
export type MdNewReleasesEvents = typeof __propDef.events;
export type MdNewReleasesSlots = typeof __propDef.slots;
export default class MdNewReleases extends SvelteComponentTyped<MdNewReleasesProps, MdNewReleasesEvents, MdNewReleasesSlots> {
}
export {};
