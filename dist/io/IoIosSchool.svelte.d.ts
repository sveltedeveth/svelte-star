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
export type IoIosSchoolProps = typeof __propDef.props;
export type IoIosSchoolEvents = typeof __propDef.events;
export type IoIosSchoolSlots = typeof __propDef.slots;
export default class IoIosSchool extends SvelteComponentTyped<IoIosSchoolProps, IoIosSchoolEvents, IoIosSchoolSlots> {
}
export {};
